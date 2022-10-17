export const Page = ({ title, children }) => {
        return (<>
            <h1>{title ? title: 'Default page title'}</h1>
            {children}
        </>
        )
    }
    // dar graziau
    // export const Page = ({ title = 'Default page title', children }) => {
    //     return (<>
    //         <h1>{title}</h1>
    //         {children}
    //     </>
    //     )
    // }
