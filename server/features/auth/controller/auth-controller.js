import ResponseHandler from '../../../common/reponse_handler.js'
import  AuthValidations  from '../auth.validations.js'



class AuthController {
    doLogin = (req, res) => {
        if(req.body.mobile.length == 10){
        ResponseHandler.success(res, [], 'Data Retrieved Successfully', 500 )

        }
        else{
            ResponseHandler.error(res, 'Entered Mobile Number is Invalid',301)
        }
    }
    doRegister = (req, res) => {
        console.log(req.body)
        const {validationError} = AuthValidations.register().validate(req.body)
        if(validationError){
            return ResponseHandler.error(res, validationError.details)
        }
        ResponseHandler.success(res,[], validationError, 200)

    }
    forgetPassword = (req, res) => {

    }

}



export { AuthController }