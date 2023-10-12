import createTheme from "@mui/material/styles/createTheme";

export const theme = createTheme({
	components: {
		MuiGrid: {
			styleOverrides: {
				root: {
					boxSizing: "border-box",
				},
			},
		},
	},
	typography: {
		body1: {
			fontSize: "15px",
		},
	},
	palette: {
		secondary: {
			main: "#fbd020",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 720,
			md: 1024,
			lg: 1200,
			xl: 1536,
		},
	},
});
