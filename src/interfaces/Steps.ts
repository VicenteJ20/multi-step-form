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

export interface Step2CardProps {
  icon: string;
  title: string;
  price: number;
}

export interface Step2SliceProps {
  plan: {
    selectedPlan: string;
    type: string;
  }
}

export interface Step3OptionProps {
  title: string;
  description: string;
  price: number;
}

export interface Step3SmallProps {
  title: string;
  price: number;
}

export interface Step3SliceProps {
  selectedAddOns: Step3SmallProps[];
}