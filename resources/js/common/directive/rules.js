import moment from 'moment';

export default {
    name: "directiveRules",
    data() {
        return {
            formValidation: false,

            // Field must be not empty
            requiredRule: (v) => !!v || 'Ce champ est obligatoire',

            // Object must be not empty
            selectRequiredRule: (v) => !!v && Object.keys(v).length !== 0 || 'Ce champ est obligatoire',

            // Field must be an email
            emailRule: (v) => !v || /.+@.+\..+/.test(v) || 'Ce champ doit être un email',

            // Array must be not empty
            comboRequiredRule: (v) => (!!v && v.length !== 0) || 'Ce champ est obligatoire',

            // Field must have a numeric value
            numericRule: (v) => !isNaN(v) || "Ce champ doit être numérique",

            //Field must be a date
            dateRule: (v) => !v || moment(v).isValid() || "Ce champ doit être une date valide",

            // TODO: add phone regex rule
            // TODO: add postal code regex rule
        }
    },
    methods: {
        /**
         *  String Max length validation
         * @param v this
         * @param x integer
         * @returns {function(*)}
         */
        maxLengthRule(v, x = 100) {
            return (v) => !v || (v ? v.length : 0) <= x ||
                `${x} caractères maximum`;
        },

        /**
         * String Min Length Validation
         * @param v this
         * @param x integer
         * @returns {function(*)}
         */
        minLengthRule(v, x = 100) {
            return (v) => !v || (v ? v.length : 0) >= x ||
                `${x} caractères minimum`;
        },

        /**
         * Select Box Max selection Validation (Object validation length)
         * @param v this
         * @param x integer
         * @returns {function(*=)}
         */
        maxSelectRule(v, x = 1) {
            return (v) => Object.keys(v).length <= x ||
                `Au maximum ${x} options sont autorisés`;
        },

        /**
         * Select Box Min selection Validation (Object validation length)
         * @param v this
         * @param x integer
         * @returns {function(*=)}
         */
        minSelectRule(v, x = 1) {
            return (v) => Object.keys(v).length >= x ||
                `Un minimum de ${x} options sont requisent`;
        },

        /**
         * Max array length validation (File, checkbox...)
         * @param v this
         * @param x integer
         * @returns {function(*)}
         */
        maxComboRule(v, x = 2) {
            return (v) => (v.length <= x) ||
                `Au maximum ${x} options sont autorisées`;
        },

        /**
         * Min array length validation (file, checkbox...)
         * @param v this
         * @param x integer
         * @returns {function(*)}
         */
        minComboRule(v, x = 1) {
            return (v) => (v.length >= x) ||
                `Un minimum de ${x} options sont requisent`;
        },

        /**
         * Max size validation for one file (in Kb)
         * @param v this
         * @param x integer
         * @returns {function(*)}
         */
        maxFileSizeRule(v, x = 2048) {
            return (v) => !v || (v ? v.size <= (x * 1024) : true) ||
                `Le fichier est trop volumineux. Max ${x} Kb`;
        },

        /**
         * File format validation for one file (docx, png, jpg)
         * @param v this
         * @param x array
         * @returns {function(*)}
         */
        mimeFileRule(v, x) {
            return (v) => (v ? x.includes(v.name.split('.')[v.name.split('.').length - 1]) : true) ||
                `Le format du fichier n'est pas accepté. Autorisé: ${x.map((e) => `${e} `)}`
        },

        /**
         * File format validation for multiple file (docx, png, jpg)
         * @param v this
         * @param x array
         * @returns {function(*=)}
         */
        mimeFilesRule(v, x) {
            // TODO : it not work. Find a solution
            return (v) => !v || v.some(f => x.includes(f.name.split('.')[f.name.split('.').length - 1])) ||
                `Un ou plusieurs fichiers ne sont pas acceptés. Autorisé ${x.map(e => `${e} `)}`;
        },

        /**
         * Max size validation for multiple file (in Kb)
         * @param v this
         * @param x integer
         * @returns {function(*=)}
         */
        maxFilesSizeRule(v, x = 2048) {
            return (v) => !v || !v.some(file => file.size > (x * 1024)) ||
                `${v.map(e => e.size > (x * 1024) ? `${e.name} ` : '')} trop volumineux. Max ${x} Kb`;
        },

        /**
         * Array in validation
         * @param v this
         * @param x array
         */
        inRule(v, x) {
            return (v) => !v || x.includes(v) || `La selection ne correspond pas aux attentes. Attendus: ${x.map(e => `${e} `)}`
        }
    }
}
