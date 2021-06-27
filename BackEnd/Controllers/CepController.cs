using back_end.IServices;
using back_end.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.Controllers
{
    [ApiController]
    public class CepController : ControllerBase
    {

        IAddressService _adressService;

        public CepController (IAddressService addressService)
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
