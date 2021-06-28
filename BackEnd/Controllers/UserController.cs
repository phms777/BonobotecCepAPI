using back_end.Models;
using back_end.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;

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
            return new AuthenticationService(_configuration).GenerateToken(login);
        }
    }
}
