import React from "react";
import {Stack} from "@mui/material";
import {Button} from "antd";
import {PhoneFilled} from "@ant-design/icons";

export const FixedFloatingButtons = ({ service }: any): React.ReactElement => {
	return (
		<div className="bottom-fixed-buttons">
			<Stack direction="row" alignItems="center" spacing={2}>
				<Button
					type="link"
					href="tel:0333 335 5848"
					className="primary-button white d-flex flex-row justify-content-center align-items-center"
					style={{
						borderRadius: 50,
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
						width: 60,
						height: 60,
					}}
				>
					<PhoneFilled style={{ fontSize: 24, color: "var(--blue-primary)" }} />
				</Button>
				<Button
					type="text"
					onClick={() => window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/appointment/${service}`)}
					className="primary-button white font-md font-semibold flex-row justify-content-center align-items-center"
					style={{
						borderRadius: 10,
						boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
						height: 60,
					}}
				>
					Make Appointment
				</Button>
			</Stack>
		</div>
	);
};
