import Image  from "next/image";
import { Button, Card, CardBody, Input} from "@nextui-org/react";
import Link from "next/link";
import useRegister from "./useRegister";
import { FaEye, FaEyeSlash } from "react-icons/fa";


const Register = () => {
    const variants = ["flat", "bordered", "underlined", "faded"];
    const {visiblePassword, handleVisiblePassword} = useRegister()

    return(
        <div className="flex w-full flex-col  items-center justify-center gap-10 lg:flex-row lg:gap-20 ">
            <div className="flex w-full lg:w-1/3 flex-col items-center justify-center gap-10">
                <Image 
                src="/images/general/MPI LOGO.png"
                alt="logo"
                width={180}
                height={180}
                />
                <Image 
                src="/images/illustrations/login.svg"
                alt="login"
                className="w-2/3 lg:w-full"
                width={1024}
                height={1024}
                />
            </div>
            <Card className="p-8">
                <CardBody>
                    <h2 className="text-xl font-bold text-danger">Create Account</h2>
                    <p className="text-small mb-4">
                        Have an account&nbsp;
                        <Link href="/login" className="font-semibold text-blue-600 hover:text-gray-400">Login here</Link>
                    </p>
                    <form className="flex w-80 flex-col gap-4">
                        <Input label="Fullname" type="text" variant="bordered" autoComplete="off" />
                        <Input label="Username" type="text" variant="bordered" autoComplete="off" />
                        <Input label="Email" type="email" variant="bordered" autoComplete="off" />
                        <Input 
                            label="Password" 
                            type={visiblePassword.password ? 'text' : 'password'}
                            variant="bordered" 
                            autoComplete="off" 
                            endContent={
                                <Button className="focus:outline-none"
                                type="button"
                                onClick={() => handleVisiblePassword("password")}
                                >
                                    {visiblePassword.password ? 
                                    <FaEye className="text-xl text-default-400 pointer-events-none" /> : 
                                    <FaEyeSlash className="text-xl text-default-400 pointer-events-none"/>}
                                </Button>
                            } 
                            />
                        <Input 
                            label="Password confirmation" 
                            type={visiblePassword.passwordConfirmation ? 'text' : 'password'}
                            variant="bordered" 
                            autoComplete="off" 
                            endContent={
                                <Button className="focus:outline-none"
                                type="button"
                                onClick={() => handleVisiblePassword("passwordConfirmation")}
                                >
                                    {visiblePassword.passwordConfirmation ? 
                                    <FaEye className="text-xl text-default-400 pointer-events-none" /> : 
                                    <FaEyeSlash className="text-xl text-default-400 pointer-events-none"/>}
                                </Button>
                            } 
                            />
                            <Button color="danger" size="lg" type="submit">Register</Button>
                    </form>
                </CardBody>
            </Card>
        </div>
    );
};

export default Register