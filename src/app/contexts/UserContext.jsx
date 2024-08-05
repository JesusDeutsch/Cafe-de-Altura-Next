"use client"

import React, { createContext, useState } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider({children}) {

	const [userName, setUserName] = useState(null);

	return(
		<UserContext.Provider value={{userName, setUserName}}>
			{children}
		</UserContext.Provider>
	)
}