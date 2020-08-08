using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TestTreeJQuery.Controllers
{
    public class GreetingsController : ApiController
    {
        public IList<Client> _clients;
        public class Client
        {
            public int ClientId;
            public string Name;
            public IList<Account> Accounts;

        }

        public class Account
        {
            public int AccountId;
            public string Name;
        }

        //[HttpGet]
        //public IHttpActionResult Get()
        //{
        //    return Ok("hello");
        //}

        //[HttpGet] -- Commented out bc api call produces error in postman
        //public IHttpActionResult Clients()
        //{
        //    var client1 = new Client();
        //    client1.ClientId = 1;
        //    client1.Name = "Client1";
        //    client1.Accounts = new List<Account>() { new Account() { AccountId = 1, Name = "A1" }, new Account() { AccountId = 2, Name = "A2" } };

        //    var client2 = new Client();
        //    client2.ClientId = 2;
        //    client2.Name = "Client2";
        //    client2.Accounts = new List<Account>() { new Account() { AccountId = 4, Name = "A4" }, new Account() { AccountId = 5, Name = "A5" } };

        //    _clients = new List<Client>() { client1, client2 };

        //    return Json(new { result = _clients });
        //}

        [HttpGet]
        public IHttpActionResult GetTree()
        {
            string jsonStr = @" [
              {
                id: '0',
                text: 'node-0',
                children: [
                  {
                    id: '0-0',
                    text: 'node-0-0',
                    children: [
                      {id: '0-0-0', text: 'node-0-0-0'},
                      {id: '0-0-1', text: 'node-0-0-1'},
                      {id: '0-0-2', text: 'node-0-0-2'},
                    ]
                  },
                  {id: '0-1', text: 'node-0-1'}
                ],
              },
              {
                id: '1',
                text: 'node-1',
                children: [{id: '1-0', text: 'node-1-0'}, {id: '1-1', text: 'node-1-1'}]
              },
            ]";

            return Json( JsonConvert.DeserializeObject(jsonStr));

        }
    }
}
