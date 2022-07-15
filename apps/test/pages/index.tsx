import { Layout } from "jhq-ui";
import { UserProvider } from "@auth0/nextjs-auth0"
import { ChakraProvider } from "@chakra-ui/react"

export default function Web() {
    return (
        <div>
            <UserProvider>
                <ChakraProvider>
                    <Layout appTitle={"a"}>
                        h
                    </Layout>
                </ChakraProvider>
            </UserProvider>
        </div>
    );
}