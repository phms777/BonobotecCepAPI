using back_end.IServices;
using back_end.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.Json;
using System.Threading.Tasks;

namespace back_end.Services
{
    public class AddressService : IAddressService
    {
 
        HttpService _http = new HttpService();

        public async Task<Address> GetAddressAsync(string cep)
        {
            try
            {
                string url = $"http://viacep.com.br/ws/{cep}/json/";
                HttpResponseMessage address = _http.GetAsync(url).Result;
                string bodyResponse = await address.Content.ReadAsStringAsync();
                if (address.StatusCode.GetHashCode() == HttpStatusCode.NotFound.GetHashCode())
                {
                    return null;
                }
                if (!address.IsSuccessStatusCode)
                {
                    throw new Exception();
                }
                return JsonConvert.DeserializeObject<Address>(bodyResponse);
            }
            catch
            {
                throw new Exception();
            }
        }

    }
}
