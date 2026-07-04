import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class DecoderController {

    @PostMapping("/decode")
    public String decode(@RequestBody String secret){

        if(secret==null || secret.trim().isEmpty())
            return "";

        String firstWord = secret.trim().split("\\s+")[0];

        int shift = firstWord.length();

        StringBuilder result = new StringBuilder();

        for(char ch : secret.toCharArray()){

            if(ch==' '){

                result.append(' ');
                continue;

            }

            if(Character.isUpperCase(ch)){

                int value = ch - 'A';

                value = (value - shift + 26) % 26;

                result.append((char)(value + 'A'));

            }

            else if(Character.isLowerCase(ch)){

                int value = ch - 'a';

                value = (value - shift + 26) % 26;

                result.append((char)(value + 'a'));

            }

            else{

                result.append(ch);

            }

        }

        return result.toString();

    }

}
