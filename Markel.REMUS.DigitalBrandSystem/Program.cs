using Markel.REMUS.Infrastructure.Service;

namespace Markel.REMUS.DigitalBrandSystem
{
    public class Program
    {

        public static void Main(string[] args)
        {
            var defaultServiceName = typeof(Program).Namespace;
            const int defaultPort = 1234;

            new NancyWindowsService(defaultServiceName, defaultPort).Run();
        }
    }


}