interface MajorCredits {
  credits: number;
  brand: "Major"
}

interface MinorCredits {
  credits: number;
  brand: "Minor"
}

const sumMajorCredits = (subject1: MajorCredits, subject2: MinorCredits): number => {
  return subject1.credits + subject2.credits;
}

const sumMinorCredits = (subject1: MajorCredits, subject2: MinorCredits): number => {
  return subject1.credits + subject2.credits;
}