import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { WizardState } from '@/types';

interface WizardStore extends WizardState {
  setCurrentStep: (step: number) => void;
  setMode: (mode: 'wizard' | 'ai-conversation') => void;
  updateRequirements: (requirements: Partial<WizardState['requirements']>) => void;
  updateContactInfo: (info: Partial<WizardState['contactInfo']>) => void;
  setComplete: (isComplete: boolean) => void;
  reset: () => void;
}

const initialState: WizardState = {
  currentStep: 1,
  mode: 'wizard',
  requirements: {},
  contactInfo: {},
  isComplete: false,
};

export const useWizardStore = create<WizardStore>()(
  persist(
    (set) => ({
      ...initialState,
      setCurrentStep: (step) => set({ currentStep: step }),
      setMode: (mode) => set({ mode }),
      updateRequirements: (requirements) =>
        set((state) => ({
          requirements: { ...state.requirements, ...requirements },
        })),
      updateContactInfo: (info) =>
        set((state) => ({
          contactInfo: { ...state.contactInfo, ...info },
        })),
      setComplete: (isComplete) => set({ isComplete }),
      reset: () => set(initialState),
    }),
    {
      name: 'wizard-storage',
    }
  )
);
