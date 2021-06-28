using back_end.Models;
using back_end.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using System;

namespace back_end.Controllers
{
    [ApiController]
    public class UserController : ControllerBase
    {
        private IConfiguration _configuration;
        public UserController(IConfiguration Configuration)
        {
            _configuration = Configuration;
        }
        [HttpPost("user")]
        public ActionResult<dynamic> UserAuthenticate([FromBody] Login login)
        {
            
            var token = new AuthenticationService(_configuration).GenerateToken(login);
            if(!String.IsNullOrEmpty(token))
            {
                login.token = token;
                login.password = "";
                return login;
            }
            else
            {
                return null;
            }
        }
    }
}
