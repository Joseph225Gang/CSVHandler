using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Domain.Package
{
    public class PackageSettings
    {
        public static readonly string CSVFileExtension = ConfigurationManager.AppSettings["CSVFileExtension"];
        public static readonly string DDisk = ConfigurationManager.AppSettings["DDisk"];
    }
}
