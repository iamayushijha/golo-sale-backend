import ResponseHandler from '../../../common/reponse_handler.js'
// import AuthValidations from '../auth.validations.js'




class AuthController {

    authenticateUser = async (req, res) => {

        // const { error } = AuthValidations.registerSchema.validate(req.body, { abortEarly: false })
        // if (error){         //TODO: why only error works and not validationError
        //      console.log(error.details) 
        //      ResponseHandler.error(res, error.details.map(err => err.type))
        //     }
        //      else{
        //          return ResponseHandler.success(res,[], 'test')
        //      }
    }
    sendOTP = async (req, res) => {

    }

}



export { AuthController }