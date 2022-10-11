export const UserGreeting = ({name}) => {
     if (name) {
     return <h1>Welcome Back, {name}</h1>;
     }

     return <h1>Welcome Back!</h1>;
};