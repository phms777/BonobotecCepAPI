using back_end.IServices;
using back_end.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace back_end.Controllers
{
    [ApiController]
    public class CepController : ControllerBase
    {

        IAddressService _adressService;

        public CepController(IAddressService addressService)
        {
            _adressService = addressService;
        }

        [EnableCors]
        [HttpGet("api/{cep}")]
        public IActionResult GetAddress(string cep)
        {
            Address adress = _adressService.GetAddressAsync(cep).Result;
            return new JsonResult(adress);
        }
    }
}
