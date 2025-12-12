import Joi from 'joi'

const AuthValidations = {

  //! Login and  Register Body Schema
  registerSchema: Joi.object({
    mobile: Joi.string().min(10).number().required().messages({
      "string.mobile": " Mobile format is invalid",
      "any.required": "Mobile No. is required",
    }),

    deviceId: Joi.string().required().messages({
      "any.required": "Device Id is required",
    }),
  }),
  
}

export default AuthValidations