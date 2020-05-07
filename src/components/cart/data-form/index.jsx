import React, { useState, useCallback, useEffect } from "react";
import { Input } from "../../input";
import { Flex, Box } from "reflexbox";
import { Button } from "../../button";
import { Select } from "../../select";
import emailValidator from "email-validator";
import { Section } from "../../section";

const supportedCountries = {
    IT: "Italia",
};

const supportedProvinces = {
    IT: {
        AG: "Agrigento",
        AL: "Alessandria",
        AN: "Ancona",
        AO: "Aosta",
        AQ: "L'Aquila",
        AR: "Arezzo",
        AP: "Ascoli-Piceno",
        AT: "Asti",
        AV: "Avellino",
        BA: "Bari",
        BT: "Barletta-Andria-Trani",
        BL: "Belluno",
        BN: "Benevento",
        BG: "Bergamo",
        BI: "Biella",
        BO: "Bologna",
        BZ: "Bolzano",
        BS: "Brescia",
        BR: "Brindisi",
        CA: "Cagliari",
        CL: "Caltanissetta",
        CB: "Campobasso",
        CI: "Carbonia Iglesias",
        CE: "Caserta",
        CT: "Catania",
        CZ: "Catanzaro",
        CH: "Chieti",
        CO: "Como",
        CS: "Cosenza",
        CR: "Cremona",
        KR: "Crotone",
        CN: "Cuneo",
        EN: "Enna",
        FM: "Fermo",
        FE: "Ferrara",
        FI: "Firenze",
        FG: "Foggia",
        FC: "Forli-Cesena",
        FR: "Frosinone",
        GE: "Genova",
        GO: "Gorizia",
        GR: "Grosseto",
        IM: "Imperia",
        IS: "Isernia",
        SP: "La-Spezia",
        LT: "Latina",
        LE: "Lecce",
        LC: "Lecco",
        LI: "Livorno",
        LO: "Lodi",
        LU: "Lucca",
        MC: "Macerata",
        MN: "Mantova",
        MS: "Massa-Carrara",
        MT: "Matera",
        VS: "Medio Campidano",
        ME: "Messina",
        MI: "Milano",
        MO: "Modena",
        MB: "Monza-Brianza",
        NA: "Napoli",
        NO: "Novara",
        NU: "Nuoro",
        OG: "Ogliastra",
        OT: "Olbia Tempio",
        OR: "Oristano",
        PD: "Padova",
        PA: "Palermo",
        PR: "Parma",
        PV: "Pavia",
        PG: "Perugia",
        PU: "Pesaro-Urbino",
        PE: "Pescara",
        PC: "Piacenza",
        PI: "Pisa",
        PT: "Pistoia",
        PN: "Pordenone",
        PZ: "Potenza",
        PO: "Prato",
        RG: "Ragusa",
        RA: "Ravenna",
        RC: "Reggio-Calabria",
        RE: "Reggio-Emilia",
        RI: "Rieti",
        RN: "Rimini",
        RM: "Roma",
        RO: "Rovigo",
        SA: "Salerno",
        SS: "Sassari",
        SV: "Savona",
        SI: "Siena",
        SR: "Siracusa",
        SO: "Sondrio",
        TA: "Taranto",
        TE: "Teramo",
        TR: "Terni",
        TO: "Torino",
        TP: "Trapani",
        TN: "Trento",
        TV: "Treviso",
        TS: "Trieste",
        UD: "Udine",
        VA: "Varese",
        VE: "Venezia",
        VB: "Verbania",
        VC: "Vercelli",
        VR: "Verona",
        VV: "Vibo-Valentia",
        VI: "Vicenza",
        VT: "Viterbo",
    },
};

const validators = {
    email: (value) => emailValidator.validate(value),
    postalCode: (value) => /^\d{5}$/.test(value),
};

export const DataForm = ({ onProceed }) => {
    const [textData, setTextData] = useState({
        firstName: "",
        name: "",
        email: "",
        address1: "",
        city: "",
        postalCode: "",
    });
    const [selectData, setSelectData] = useState({
        country: null,
        province: null,
    });
    const [errors, setErrors] = useState({});
    const [proceedDisabled, setProceedDisabled] = useState(true);

    useEffect(() => {
        for (const error of Object.values(errors)) {
            if (error) {
                setProceedDisabled(true);
                return;
            }
        }
        for (const singleTextData of Object.values(textData)) {
            if (!singleTextData) {
                setProceedDisabled(true);
                return;
            }
        }
        for (const singleSelectData of Object.values(selectData)) {
            if (!singleSelectData || !singleSelectData.value) {
                setProceedDisabled(true);
                return;
            }
        }
        setProceedDisabled(false);
    }, [errors, textData, selectData]);

    const getTextChangeHandler = (key) => (event) => {
        const newValue = event.target.value;
        const validator = validators[key];
        setErrors({
            ...errors,
            [key]: validator && !validator(newValue),
        });
        setTextData({ ...textData, [key]: newValue });
    };

    const getSelectChangeHandler = (key) => (selectedOption) => {
        setSelectData({ ...selectData, [key]: selectedOption });
    };

    const handleProceedLocal = useCallback(() => {
        const data = {
            ...textData,
            ...Object.entries(selectData).reduce(
                (parsedSelectData, [key, wrappedValue]) => {
                    parsedSelectData[key] = wrappedValue.value;
                    return parsedSelectData;
                },
                {}
            ),
        };
        onProceed(data);
    }, [textData, selectData, onProceed]);

    return (
        <Section title="Dati di spedizione">
            <Flex flexDirection={["column", "column", "row"]}>
                <Box width={[1, 1, 1 / 2]} mr={[0, 0, 3]} mb={3}>
                    <Input
                        label="Nome"
                        placeholder="Mario"
                        value={textData["firstName"] || ""}
                        error={errors["firstName"]}
                        onChange={getTextChangeHandler("firstName")}
                    />
                </Box>
                <Box width={[1, 1, 1 / 2]} ml={[0, 0, 3]} mb={3}>
                    <Input
                        label="Cognome"
                        placeholder="Rossi"
                        value={textData["name"] || ""}
                        error={errors["name"]}
                        onChange={getTextChangeHandler("name")}
                    />
                </Box>
            </Flex>
            <Flex flexDirection={["column", "column", "row"]}>
                <Box width={[1, 1, 1 / 2]} mr={[0, 0, 3]} mb={3}>
                    <Input
                        label="Email"
                        placeholder="mario.rossi@gmail.com"
                        value={textData["email"] || ""}
                        error={errors["email"]}
                        onChange={getTextChangeHandler("email")}
                    />
                </Box>
                <Box width={[1, 1, 1 / 2]} ml={[0, 0, 3]} mb={3}>
                    <Input
                        label="Indirizzo completo"
                        placeholder="Via Roncalli 10"
                        value={textData["address1"] || ""}
                        error={errors["address1"]}
                        onChange={getTextChangeHandler("address1")}
                    />
                </Box>
            </Flex>
            <Flex flexDirection={["column", "column", "row"]}>
                <Box width={[1, 1, 1 / 2]} mr={[0, 0, 3]} mb={3}>
                    <Input
                        label="Città"
                        placeholder="Roma"
                        value={textData["city"] || ""}
                        error={errors["city"]}
                        onChange={getTextChangeHandler("city")}
                    />
                </Box>
                <Box width={[1, 1, 1 / 2]} ml={[0, 0, 3]} mb={3}>
                    <Input
                        label="CAP"
                        placeholder="10392"
                        value={textData["postalCode"] || ""}
                        error={errors["postalCode"]}
                        onChange={getTextChangeHandler("postalCode")}
                    />
                </Box>
            </Flex>
            <Flex flexDirection={["column", "column", "row"]}>
                <Box width={[1, 1, 1 / 2]} mr={[0, 0, 3]} mb={3}>
                    <Select
                        label="Paese"
                        placeholder="Italia"
                        options={Object.entries(
                            supportedCountries
                        ).map(([value, label]) => ({ value, label }))}
                        value={selectData["country"]}
                        error={errors["country"]}
                        onChange={getSelectChangeHandler("country")}
                    />
                </Box>
                <Box width={[1, 1, 1 / 2]} ml={[0, 0, 3]} mb={3}>
                    <Select
                        label="Provincia"
                        placeholder="Milano"
                        options={
                            selectData["country"] &&
                            selectData["country"].value &&
                            Object.entries(
                                supportedProvinces[selectData["country"].value]
                            ).map(([value, label]) => ({ value, label }))
                        }
                        value={selectData["province"]}
                        error={errors["province"]}
                        onChange={getSelectChangeHandler("province")}
                    />
                </Box>
            </Flex>
            <Flex justifyContent="flex-end">
                <Box>
                    <Button
                        onClick={handleProceedLocal}
                        disabled={proceedDisabled}
                    >
                        Procedi al pagamento
                    </Button>
                </Box>
            </Flex>
        </Section>
    );
};
