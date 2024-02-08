export interface Step1Props {
  name: string;
  email_address: string;
  phone_number: string;
}

export interface ActiveStepProps {
  value?: number;
}

export interface Step1PropsState {
  step1: Step1Props;
}

export interface StateStepProps {
  step1: Step1Props;
}