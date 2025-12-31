const{LoginPage} =require('../pageobjects/LoginPage');


class POManager{
    constructor(page)
    {
        this.page=page;
        this.loginpage = new LoginPage(this.page);
    }


getloginpage()
{
    return this.loginpage;
}
}

module.exports={POManager}
