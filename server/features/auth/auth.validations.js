import Joi from 'joi'

class AuthValidations{

 registerSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.email": "Email format is invalid",
    "any.required": "Email is required",
  }),

  password: Joi.string().min(6).required().messages({
    "string.min": "Password must be at least 6 characters long",
    "any.required": "Password is required",
  }),
});



}

export default AuthValidations


