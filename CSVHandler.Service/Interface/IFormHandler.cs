using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CSVHandler.Service.Interface
{
    public interface IFormHandler
    {
        StringBuilder GenerateData(dynamic target);

        void GenerateFlow(dynamic target);
    }
}
