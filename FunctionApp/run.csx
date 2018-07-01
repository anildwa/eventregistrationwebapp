#r "Microsoft.Azure.Documents.Client"
#r "Newtonsoft.Json"
#r "SendGrid"

using System;
using System.Collections.Generic;
using Microsoft.Azure.Documents;
using Newtonsoft.Json;
using SendGrid;
using SendGrid.Helpers.Mail;
using System.Threading.Tasks;



public class AttendeeName
{
    public int t { get; set; }
    public string v { get; set; }
}

public class Email
{
    public int t { get; set; }
    public string v { get; set; }
}

public class Company
{
    public int t { get; set; }
    public string v { get; set; }
}

public class SessionType
{
    public int t { get; set; }
    public string v { get; set; }
}

public class Id
{
    public int t { get; set; }
    public string v { get; set; }
}

public class V2
{
    public int t { get; set; }
    public int v { get; set; }
}

public class V
{
    public AttendeeName attendeeName { get; set; }
    public Email email { get; set; }
    public Company company { get; set; }
    public SessionType sessionType { get; set; }
    public Id _id { get; set; }
    public V2 __v { get; set; }
}

public class RootObject
{
    public int t { get; set; }
    public V v { get; set; }
    public string id { get; set; }
    public string _rid { get; set; }
    public string _self { get; set; }
    public string _etag { get; set; }
    public string _attachments { get; set; }
    public int _ts { get; set; }
    public int _lsn { get; set; }
}


public static void Run(IReadOnlyList<Document> input, TraceWriter log)
{
    if (input != null && input.Count > 0)
    {
        log.Verbose("Documents modified " + input.Count);
        log.Verbose("First document Id " + input[0].Id);

        log.Verbose("getting data....");
        dynamic docdata = Newtonsoft.Json.Linq.JObject.Parse(input[0].ToString());
        //var reqbody = body as string;
        log.Verbose("email is " + docdata["$v"]["email"]["$v"]);
        log.Verbose("attendeeName is " + docdata["$v"]["attendeeName"]["$v"]);
       
        var client = new SendGridClient("");

        var from = new EmailAddress("anildwa@msftdemo.com", "anildwa");

        var subject = "Registration Completed";

        
        var to = new EmailAddress(docdata["$v"]["email"]["$v"].ToString(), docdata["$v"]["attendeeName"]["$v"].ToString());
        var plainTextContent = "Thank you for Registering. Look forward to seeing you.";

        var htmlContent = "<strong>Breakout and Chalktalks</strong><p>Thank you for Registering. Look forward to seeing you.</p>";

        var msg = MailHelper.CreateSingleEmail(from, to, subject, plainTextContent, htmlContent);

        var response = client.SendEmailAsync(msg).GetAwaiter().GetResult();
        log.Verbose("Status Code is ..." + response.StatusCode.ToString());
    }
}
