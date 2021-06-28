using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace back_end.Services
{
    public class HttpService
    {
        public async Task<HttpResponseMessage> GetAsync(string url)
        {
            try
            {
                HttpClient httpClient = new HttpClient();
                HttpResponseMessage httpResponse = await httpClient.GetAsync(url);
                return httpResponse;
            }
            catch (Exception e)
            {
                throw new Exception();
            }
        }

    }
}
