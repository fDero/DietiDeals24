package backend;

import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class ServerStartup {

    public static void main(String[] args) throws JsonProcessingException {
        var context = SpringApplication.run(ServerStartup.class, args);
        Integer port = context.getBean(ServerInfo.class).getPort();
        String address = context.getBean(ServerInfo.class).getAddress();
        System.out.println("\n\nServer startup success!");
        System.out.println("operating with ip: " + address);
        System.out.println("operating on port: " + port);
    }
}
