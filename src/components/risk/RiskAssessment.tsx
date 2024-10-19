import React, { useState } from "react";
import { Alert, Button, Card, Modal } from "antd";
import { Button as MuiButton, FormControl, FormLabel, MenuItem, Select, Stack, TextField } from "@mui/material";
import { useAuth } from "hooks";
import {
	ArrowLeftOutlined,
	ArrowRightOutlined,
	DownloadOutlined,
	CheckCircleFilled,
	ExclamationCircleFilled,
} from "@ant-design/icons";
import { useRiskAssessment } from "stores/risk-assessment";

const steps = [
	{ id: "fname", label: "First name", placeholder: "First name", type: "text", required: true },
	{ id: "age", label: "Age", placeholder: "Age", type: "number", required: true },
	{
		id: "sex",
		label: "Sex",
		type: "radio",
		options: [
			{ value: "MALE", label: "Male" },
			{ value: "FEMALE", label: "Female" },
		],
		required: true,
	},
	{
		id: "weight",
		label: "Weight",
		type: "number",
		unitOptions: [
			{ value: "kg", label: "Kg" },
			{ value: "lb", label: "Lb" },
		],
		required: true,
	},
	{
		id: "height",
		label: "Height",
		type: "number",
		unitOptions: [
			{ value: "cm", label: "Cm" },
			{ value: "in", label: "Inches" },
		],
		required: true,
	},
	{
		id: "previousFracture",
		label: "Previous Fracture",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "familyHistory",
		label: "Family History of Osteoporosis",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "periMenopausal",
		label: "Perimenopausal / Menopausal",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "smoking",
		label: "Smoking",
		type: "radio",
		options: [
			{ value: 2, label: "Yes > 3 units/day" },
			{ value: 1, label: "Yes < 3 units/day" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "alcohol",
		label: "Alcohol Consumption",
		type: "radio",
		options: [
			{ value: 2, label: "Yes > 3 units/day" },
			{ value: 1, label: "Yes < 3 units/day" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "glucocorticoids",
		label: "Glucocorticoids / Steroid Medicines",
		type: "radio",
		options: [
			{ value: 2, label: "Yes > 3 months" },
			{ value: 1, label: "Yes < 3 months" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "rheumatoidArthritis",
		label: "Rheumatoid Arthritis",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "pregnancy",
		label: "Pregnancy",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "digestiveHealth",
		label: "Digestive Health / IBS",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "substanceUse",
		label: "Substance Use",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{
		id: "arthritis",
		label: "Arthritis",
		type: "radio",
		options: [
			{ value: 1, label: "Yes" },
			{ value: 0, label: "No" },
		],
		required: true,
	},
	{ id: "email", label: "Email address", placeholder: "Email", type: "text", required: true },
];

export const RiskAssessment = (): React.ReactElement => {
	const { toggleOpenRiskModal } = useAuth();
	const [{ fetching }, actions] = useRiskAssessment();
	const [data, setData] = useState<any>({ fname: "", email: "", weightUnit: "kg", heightUnit: "in" });
	const [riskLevel, setRiskLevel] = useState<string | null>(null);
	const [bmi, setBmi] = useState<number | null>(null);
	const [currentStep, setCurrentStep] = useState(0);
	const [validationErrors, setValidationErrors] = useState<string | null>(null);
	const isSaveDisabled = steps.some((step) => step.required && (data[step.id] === undefined || data[step.id] === ""));

	const isValidEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const onChange = (value: any, key: any): void => {
		setData((prev: any) => ({ ...prev, [key]: value }));
	};

	const validateStep = (): boolean => {
		const currentStepData = steps[currentStep];

		if (currentStepData.required && (data[currentStepData.id] === undefined || data[currentStepData.id] === "")) {
			setValidationErrors(currentStepData.id);
			return false;
		}

		if (currentStepData.id === "email" && !isValidEmail(data[currentStepData.id] || "")) {
			setValidationErrors(currentStepData.id);
			return false;
		}

		setValidationErrors(null);
		return true;
	};

	const handleNext = (): void => {
		if (validateStep()) {
			if (currentStep < steps.length - 1) {
				setCurrentStep((prev) => prev + 1);
			}
		}
	};

	const handlePrev = (): void => {
		if (currentStep > 0) {
			setCurrentStep((prev) => prev - 1);
		}
	};

	const calculateBMI = (): number | null => {
		const weight = parseFloat(data.weight);
		const height = parseFloat(data.height);

		if (!weight || !height) return null;

		let weightInKg = weight;
		let heightInMeters = height / 100;

		if (data.weightUnit === "lb") {
			weightInKg = weight * 0.453592;
		}

		if (data.heightUnit === "in") {
			heightInMeters = height * 0.0254;
		}

		const bmi = weightInKg / (heightInMeters * heightInMeters);
		return parseFloat(bmi.toFixed(2));
	};

	const onSave = async (): Promise<void> => {
		const crisk = calculateRisk();
		const cbmi = calculateBMI();
		await actions.save({
			...data,
			riskLevel: crisk,
			bmi: cbmi,
			riskColor: riskLevel?.includes("Low") ? "#65b7a1" : riskLevel?.includes("High") ? "#ec407a" : "#E4A118",
		});
		setRiskLevel(crisk);
		setBmi(cbmi);
	};

	const calculateRisk = (): string => {
		let score = 0;

		// Calculate score based on provided criteria
		if (data.age > 45 && data.sex === "FEMALE") score += 2;
		else if (data.age >= 35 && data.age <= 45 && data.sex === "FEMALE") score += 1;

		if (data.sex === "MALE" && data.age > 50) score += 1;

		if (data.previousFracture) score += data.previousFracture;
		if (data.familyHistory) score += data.familyHistory;
		if (data.periMenopausal) score += data.periMenopausal;
		if (data.smoking) score += data.smoking;
		if (data.alcohol) score += data.alcohol;
		if (data.glucocorticoids) score += data.glucocorticoids;
		if (data.rheumatoidArthritis) score += data.rheumatoidArthritis;
		if (data.pregnancy) score += data.pregnancy;
		if (data.digestiveHealth) score += data.digestiveHealth;
		if (data.substanceUse) score += data.substanceUse;
		if (data.arthritis) score += data.arthritis;

		// Determine risk level
		if (score >= 10) return "High Risk";
		else if (score >= 3) return "Moderate Risk";
		else return "Low Risk";
	};

	return (
		<Modal
			open
			centered
			closable
			onCancel={() => toggleOpenRiskModal(false)}
			footer={
				!riskLevel && (
					<Stack direction="row" alignItems="center" justifyContent={currentStep === 0 ? "flex-end" : "space-between"}>
						{currentStep !== 0 && (
							<Button
								type="text"
								size="large"
								className="flex-row align-items-center d-flex"
								style={{ color: "var(--yellow-primary)" }}
								onClick={handlePrev}
							>
								<ArrowLeftOutlined />
								Previous
							</Button>
						)}
						{currentStep === steps.length - 1 ? (
							<Button
								loading={!!fetching}
								disabled={isSaveDisabled || !!fetching}
								className="primary-button blue-secondary"
								size="large"
								onClick={() => {
									if (validateStep()) {
										onSave();
									}
								}}
							>
								Save
								<ArrowRightOutlined />
							</Button>
						) : (
							<Button type="text" size="large" className="flex-row align-items-center d-flex" onClick={handleNext}>
								Next
								<ArrowRightOutlined />
							</Button>
						)}
					</Stack>
				)
			}
			title={<h5 className="font-semibold mb-0">Check Your Risk</h5>}
			closeIcon={null}
		>
			{riskLevel ? (
				<Stack style={{ height: "100%" }} justifyContent="center" alignItems="center" spacing={3}>
					<Alert
						type="success"
						message={`We've emailed you the results of your risk assessment and BMI. You have been subscribed to our newsletter.`}
					/>
					<Stack
						style={{ width: "100%" }}
						direction="row"
						alignItems="center"
						justifyContent="space-evenly"
						spacing={2}
					>
						<Stack style={{ height: "100%" }} justifyContent="center" alignItems="center" spacing={3}>
							{riskLevel.includes("Low") ? (
								<CheckCircleFilled style={{ color: "var(--green-primary)", fontSize: 48 }} />
							) : (
								<ExclamationCircleFilled
									style={{
										color: riskLevel.includes("High") ? "var(--red-primary)" : "var(--yellow-primary)",
										fontSize: 48,
									}}
								/>
							)}
							<h3
								className={`font-semibold ${riskLevel.includes("Low") ? "color-green" : riskLevel.includes("High") ? "color-red" : "color-yellow"}`}
							>
								{riskLevel}
							</h3>
						</Stack>
						<Stack style={{ height: "100%" }} justifyContent="center" alignItems="center" spacing={3}>
							<img alt="BMI" src={require("../../assets/Images/bone/bmi.png")} style={{ width: 48, height: 48 }} />
							<h3 className="font-semibold color-primary-text">
								BMI: <span className="color-blue-secondary">{bmi}</span>
							</h3>
						</Stack>
					</Stack>
					<p className="font-md color-primary-text" style={{ marginTop: 40 }}>
						We recommend scheduling an appointment with our experts for further consultation.
					</p>
					<Stack
						direction="row"
						flexWrap="wrap"
						style={{ width: "100%" }}
						justifyContent="space-between"
						alignItems="center"
						spacing={2}
					>
						<Button
							className="primary-button blue-secondary font-medium d-flex align-items-center"
							size="large"
							style={{ minHeight: 45, marginTop: 10 }}
							onClick={() => {
								window.open("https://d1xtnuaiurb7bb.cloudfront.net/pdfs/bone-checklist.pdf", "_blank");
							}}
						>
							Bone Health Checklist
							<DownloadOutlined style={{ marginLeft: 10 }} />
						</Button>
						<Button
							className="primary-button blue font-medium"
							size="large"
							style={{ minHeight: 45, marginTop: 10 }}
							onClick={() => {
								toggleOpenRiskModal(false);
								window.open(`${process.env.REACT_APP_REDIRECT_DOMAIN}/bone`)
							}}
						>
							Book Appointment
						</Button>
					</Stack>
				</Stack>
			) : (
				<div className="step-container">
					<div className={`step-content ${currentStep === steps.length - 1 ? "step-content-end" : ""}`}>
						<Card
							bodyStyle={{
								boxShadow: "0 4px 16px rgba(16, 29, 45, 0.08)",
								background: "white",
								border: `1px solid ${validationErrors === steps[currentStep].id ? "var(--red-primary)" : "transparent"}`,
							}}
						>
							{steps[currentStep].type === "radio" ? (
								<FormControl component="fieldset" fullWidth>
									<FormLabel
										style={{ color: validationErrors === steps[currentStep].id ? "#d32f2f" : "black" }}
										component="legend"
									>
										{currentStep + 1}) {steps[currentStep].label} <span className="color-red">*</span>
									</FormLabel>
									<ButtonRadioGroup
										flexWrap="wrap"
										value={data[steps[currentStep].id]}
										onChange={(val) => onChange(val, steps[currentStep].id)}
										options={steps[currentStep]?.options ?? []}
									/>
								</FormControl>
							) : (
								<FormControl component="fieldset" fullWidth>
									<FormLabel
										style={{ color: validationErrors === steps[currentStep].id ? "#d32f2f" : "black" }}
										component="legend"
									>
										{currentStep + 1}) {steps[currentStep].label}{" "}
										{steps[currentStep].required && <span className="color-red">*</span>}
									</FormLabel>
									{steps[currentStep].id === "weight" || steps[currentStep].id === "height" ? (
										<div style={{ display: "flex", gap: "10px" }}>
											<TextField
												fullWidth
												type={steps[currentStep].type}
												placeholder={steps[currentStep].placeholder}
												onChange={(e) => onChange(e.target.value, steps[currentStep].id)}
												value={data[steps[currentStep].id] || ""}
											/>
											<Select
												displayEmpty
												size="medium"
												value={data[`${steps[currentStep].id}Unit`]}
												onChange={(val) => onChange(val, `${steps[currentStep].id}Unit`)}
											>
												{steps[currentStep]?.unitOptions?.map((u) => (
													<MenuItem value={u.value} key={u.value}>
														{u.label}
													</MenuItem>
												))}
											</Select>
										</div>
									) : (
										<TextField
											fullWidth
											type={steps[currentStep].type}
											placeholder={steps[currentStep].placeholder}
											onChange={(e) => onChange(e.target.value, steps[currentStep].id)}
											value={data[steps[currentStep].id] || ""}
										/>
									)}
								</FormControl>
							)}
						</Card>
					</div>
				</div>
			)}
		</Modal>
	);
};

interface Props {
	value?: string | string[];
	error?: string;
	onChange: (e: any) => void;
	flexWrap?: "wrap";
	options: {
		value: string | number;
		label: string;
	}[];
}

export const ButtonRadioGroup = (props: Props): React.ReactElement => {
	return (
		<Stack direction="row" alignItems="center" flexWrap={props.flexWrap} spacing={1} minWidth="fit-content">
			{props.options?.map((o) => (
				<MuiButton
					key={o.value}
					size="small"
					className="radio-group-button"
					variant={props.value === o.value ? "contained" : "outlined"}
					color="primary"
					onClick={() => props.onChange(o.value)}
				>
					{o.label}
				</MuiButton>
			))}
		</Stack>
	);
};
