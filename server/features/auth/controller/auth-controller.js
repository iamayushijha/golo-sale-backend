import ResponseHandler from '../../../common/reponse_handler.js'


class AuthController {
    doLogin = (req, res) => {
        if(req.body.email == dbemail)
        ResponseHandler.success(res, [], 'Data Retrieved Successfully', 500 )
    }
    doRegister = (req, res) => {
        ResponseHandler.success(res,[], 'Registered Successfully', 200)

    }
    forgetPassword = (req, res) => {

    }

}

export { AuthController }