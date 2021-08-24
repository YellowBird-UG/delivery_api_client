package java;

import java.net.URI;
import org.apache.http.HttpEntity;
import org.apache.http.HttpResponse;
import org.apache.http.client.HttpClient;
import org.apache.http.client.methods.HttpGet;
import org.apache.http.client.utils.URIBuilder;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.util.EntityUtils;

public class DriverLocation {
    

    public static void main(String[] args){
        HttpClient client = HttpClientBuilder.create().build();
        String privateKey = "";

        try {
            HttpPost request = new HttpPost("https://logistic.groupngs.com/api/");
            request.setHeader("Authorization", "Bearer " + privateKey);
            request.setHeader("Content-Type", "application/json");
            
            //req body 
            StringEntity reqEntity = new StringEntity("{\"action\": \"driverLocation\",\"requestID\": \"7638bae085e...1f24cf80edff1213\"}");
            request.setEntity(reqEntity);

            HttpResponse response = client.execute(request);
            HttpEntity responseEntity = response.getEntity();

            if (responseEntity != null) {
                System.out.println(EntityUtils.toString(responseEntity));
            }
        } catch (Exception e) {
            //TODO: handle exception
            e.printStackTrace();
        }
    }
}
