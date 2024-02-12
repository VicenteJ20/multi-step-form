export const Step1 = {
  title: 'Personal info',
  description: 'Please provide your name, email address, and phone number.'
}

export const Step2 = {
  title: 'Select your plan',
  description: 'You have the option of monthly or yearly billing.'
}

export const Step3 = {
  title: 'Pick add-ons',
  description: 'Add-ons help enhance your gaming experience.'
}

export const Step4 = {
  title: 'Finishing up',
  description: 'Double-check everything looks OK before confirming.'
}

export const StepsSidebarInfo = [
  {
    index: 1,
    url: '/your-info',
    title: 'YOUR INFO',
    slice: 'step1'
  },
  {
    index: 2,
    url: '/select-plan',
    title: 'SELECT PLAN',
    slice: 'step2'
  },
  {
    index: 3,
    url: '/add-ons',
    title: 'ADD-ONS',
    slice: 'step3'
  },
  {
    index: 4,
    url: '/summary',
    title: 'SUMMARY',
    slice: 'step4'
  }
]

export const PlanCards = [
  {
    icon: '/assets/icon-arcade.svg',
    title: 'Arcade',
    price: 9
  },
  {
    icon: '/assets/icon-advanced.svg',
    title: 'Advanced',
    price: 12
  },
  {
    icon: '/assets/icon-pro.svg',
    title: 'Pro',
    price: 15
  }
]

// prices are monthly, they should be multiplied by 10 if the user select a yearly billing.
export const Step3InfoOptions = [
  {
    title: 'Online service',
    description: 'Access to multiplayer games',
    price: 1
  },
  {
    title: 'Larger storage',
    description: 'Extra 1TB of cloud save',
    price: 2
  },
  {
    title: 'Customizable profile',
    description: 'Custom theme on your profile',
    price: 2
  }
]