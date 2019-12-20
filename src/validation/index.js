
/* root validation 📍 .. */



// private ⛔️ .. 
// ========================================================================================================

const AtoZ_Pattern = /[a-zA-Z]/g ; // \s+ ==> find all space .. 
const Numeric_Pattern = /[0-9]/g ;

/**
 * @private
 * @desc validate any input string with your custom Reg. Exp. pattern .. 
 * @param {string} inputData : input data ..
 * @param {RegExpPattern} RegExpPattern : reg. exp. pattern .. 
 */
const PrivateValidationFunc = (inputData, RegExpPattern) => (inputData.match(RegExpPattern) === null) ? false : (inputData.length === inputData.match(RegExpPattern).length);

// ========================================================================================================



/**
 * @public
 * @desc validate your input isString .. 
 * @param {string} inputData : input data ..
 */
const requiredString = (inputData) => PrivateValidationFunc(inputData, AtoZ_Pattern);


/**
 * @public 
 * @desc validate your input isNumeric .. 
 * @param {string} inputData : input data ..
 */
const requiredNumeric = (inputData) => PrivateValidationFunc(inputData, Numeric_Pattern);


/**
 * @public 
 * @desc validate your input isNumeric with your specifique length .. 
 * @param {string} inputData 
 * @param {number} xLength 
 */
const requiredNumericWithXLength = (inputData, xLength) => (requiredNumeric(inputData)) ? inputData.length === xLength : false ;


export { requiredString, requiredNumeric, requiredNumericWithXLength };
