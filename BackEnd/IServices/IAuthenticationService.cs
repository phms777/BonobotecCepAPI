using back_end.Models;

namespace back_end.IServices
{
    public interface IAuthenticationService
    {
        public string GenerateToken(Login login);
    }
}
