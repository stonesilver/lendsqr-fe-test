import { formatCurrency } from 'utils/formatCurrency';

interface PersonalInfoProps {
  firstName: string;
  lastName: string;
  bvn: string;
  address: string;
  email: string;
  phoneNumber: string;
  username: string;
  gender: string;
}

interface EducationAndEmploymentProps {
  duration: string;
  employmentStatus: string;
  level: string;
  loanRepayment: string;
  monthlyIncome: string[];
  officeEmail: string;
  sector: string;
}

interface SocialsProps {
  facebook: string;
  instagram: string;
  twitter: string;
}

interface GuarantorProps {
  address: string;
  firstName: string;
  gender: string;
  lastName: string;
  phoneNumber: string;
}

export const personalInfo = (personalInfo: PersonalInfoProps) => {
  const {
    firstName,
    lastName,
    bvn,
    address,
    gender,
    email,
    username,
    phoneNumber,
  } = personalInfo;
  return [
    { title: 'full Name', value: `${firstName} ${lastName}` },
    { title: 'Phone Number', value: phoneNumber.split(' x')[0] },
    { title: 'Email Address', value: email },
    { title: 'Bvn', value: bvn },
    { title: 'Gender', value: gender },
    { title: 'Username', value: username },
    { title: 'Address', value: address },
  ];
};

export const educationAndEmployment: (
  education: EducationAndEmploymentProps
) => { title: string; value: any }[] = (education) => {
  const {
    duration,
    employmentStatus,
    level,
    loanRepayment,
    monthlyIncome,
    officeEmail,
    sector,
  } = education;

  return [
    { title: 'level of education', value: level },
    { title: 'employment status', value: employmentStatus },
    { title: 'sector of employment', value: sector },
    { title: 'Duration of employment', value: duration },
    { title: 'office email', value: officeEmail },
    {
      title: 'Monthly income',
      value: `${formatCurrency(monthlyIncome[0])} - $${formatCurrency(
        monthlyIncome[1]
      )}`,
    },
    {
      title: 'loan repayment',
      value: formatCurrency(loanRepayment),
    },
  ];
};

export const socials = (socials: SocialsProps) => {
  const { facebook, instagram, twitter } = socials;
  return [
    { title: 'twitter', value: twitter },
    { title: 'facebook', value: facebook },
    { title: 'instagram', value: instagram },
  ];
};

export const guarantor = (guarantor: GuarantorProps) => {
  const { address, firstName, gender, lastName, phoneNumber } = guarantor;
  return [
    { title: 'fullname', value: `${firstName} ${lastName}` },
    { title: 'phone number', value: phoneNumber.split(' x')[0] },
    { title: 'address', value: address },
    { title: 'gender', value: gender },
  ];
};
