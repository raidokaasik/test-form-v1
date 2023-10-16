import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export interface PageWrapperProps {
	children: React.ReactElement | React.ReactElement[];
	headerText?: string;
}

export const PageWrapper = ({
	children,
	headerText,
}: PageWrapperProps): React.ReactElement => {
	return (
		<Box
			padding={{ xs: "32px", lg: "72px" }}
			sx={{
				height: "inherit",
				width: "100%",
				maxWidth: "960px",
				backgroundColor: "#fff",
				boxSizing: "border-box",
				overflow: "auto",
			}}
		>
			<Typography variant="h5">{headerText}</Typography>
			{children}
		</Box>
	);
};
