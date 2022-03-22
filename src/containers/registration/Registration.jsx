import Input from "../../components/input"; 
import Button from "../../components/button"; 
import { Title, SubTitle } from "../../components/typography"; 
import useForm from "./hooks/useForm"; 

const RegistrationContainer = () => { 
    const { 
        handleChange, 
        handleSubmit, 
        handleBlur, 
        hasErrors, 
        isValid, 
        values
    } = useForm({ 
        initialValues: { 
            username: '', 
            email: '', 
            password: '' 
        } 
    }); 
return ( 
    <main className="w-full text-gray-700 h-screen flex flex-col space-y-3 justify-ce nter items-center"> 
        <div className="max-w-md"> 
            <div className="w-full py-5"> 
                <Title text="Sign up here" /> 
                <Title /> 
            <SubTitle content="Lorem ipsum dolor sit amet consectetur adipisicing elit." /> 
            </div> 
                    <form className="w-full border p-5 rounded-2xl" onSubmit={handleSubmit}> 
        <Input 
            name="username" 
            label="Username" 
            type="text" 
            placeholder="Your username" 
            onChange={(value) => handleChange("username", value)} 
            onBlur={(e) => handleBlur("username", e)} 
        /> 
        { 
        hasErrors("username") && ( 
        <div className="text-lg text-red-500 pb-3">{hasErrors("username")}</div> ) 
        } 
        <Input 
        name="email" 
        label="Email" 
        type="text" 
        placeholder="your@email.com" 
        onChange={(value) => handleChange("email", value)} 
        onBlur={(e) => handleBlur("email", e)} 
        /> 
        { 
        hasErrors("email") && ( 
        <div className="text-xl font-bold text-red-500 pb-3">{hasErrors("emai l")}</div> 
        )  
        } 
        <Input 
        name="password" 
        label="Password" 
        type="password" 
        placeholder="Your secret password" 
        onChange={(value) => handleChange("password", value)} 
        onBlur={(e) => handleBlur("password", e)}
        /> 
        { 
        hasErrors("password") && ( 
        <div className="text-xs text-indigo-500 pb-3">{hasErrors("password")}</div> 
        ) 
        } 
        <Button type="submit" label="Create an account now!" /> 
    </form> 
    </div> 
    </main> 
    ) 
} 
export default RegistrationContainer; 
 