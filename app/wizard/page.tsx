'use client';

import { useState } from 'react';
import { useWizardStore } from '@/lib/store';
import ProgressBar from '@/components/wizard/ProgressBar';
import Link from 'next/link';
import { ArrowLeft, MapPin, Square, Home, Palette, Building2, IndianRupee, Calendar, Users, Sparkles, Sofa, FileText, Upload } from 'lucide-react';
import { useRouter } from 'next/navigation';

const TOTAL_STEPS = 12;

export default function WizardPage() {
  const router = useRouter();
  const { currentStep, requirements, updateRequirements, setCurrentStep } = useWizardStore();
  const [step, setStep] = useState(currentStep);
  const [formData, setFormData] = useState<any>(requirements || {});

  const handleNext = (data: any) => {
    const updated = { ...formData, ...data };
    setFormData(updated);
    updateRequirements(data);
    if (step < TOTAL_STEPS) {
      const nextStep = step + 1;
      setStep(nextStep);
      setCurrentStep(nextStep);
    } else {
      router.push('/contact');
    }
  };

  const handleBack = () => {
    if (step > 1) {
      const prevStep = step - 1;
      setStep(prevStep);
      setCurrentStep(prevStep);
    }
  };

  const renderStep = () => {
    const commonProps = { onNext: handleNext, onBack: handleBack, initialData: formData };
    
    switch (step) {
      case 1:
        return <Step1Location {...commonProps} />;
      case 2:
        return <Step2Plot {...commonProps} />;
      case 3:
        return <Step3Purpose {...commonProps} />;
      case 4:
        return <Step4Styles {...commonProps} />;
      case 5:
        return <Step5Floors {...commonProps} />;
      case 6:
        return <Step6Budget {...commonProps} />;
      case 7:
        return <Step7Timeline {...commonProps} />;
      case 8:
        return <Step8Family {...commonProps} />;
      case 9:
        return <Step9Lifestyle {...commonProps} />;
      case 10:
        return <Step10Interior {...commonProps} />;
      case 11:
        return <Step11Special {...commonProps} />;
      case 12:
        return <Step12Upload {...commonProps} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-12 px-4">
      <div className="container mx-auto">
        <div className="mb-8">
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>

        <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} />
        {renderStep()}
        
        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            Prefer a conversation?{' '}
            <Link href="/ai-consultation" className="text-amber-700 hover:text-amber-800 font-semibold">
              Try AI Consultation
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

// Simplified Step Components (inline for efficiency)
function Step1Location({ onNext, initialData }: any) {
  const [state, setState] = useState(initialData?.location?.state || '');
  const [city, setCity] = useState(initialData?.location?.city || '');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 1</p>
            <h2 className="text-3xl font-bold text-gray-900">Location</h2>
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="text"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="Enter State"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 outline-none"
          />
          <input
            type="text"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 outline-none"
          />
        </div>
        <button
          onClick={() => onNext({ location: { state, city } })}
          disabled={!state || !city}
          className="w-full mt-8 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50"
        >
          Continue
        </button>
      </div>
    </div>
  );
}

function Step2Plot({ onNext, onBack, initialData }: any) {
  const [size, setSize] = useState(initialData?.plot?.size || '');
  const [roadFacing, setRoadFacing] = useState(initialData?.plot?.roadFacing || '');

  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center">
            <Square className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 2</p>
            <h2 className="text-3xl font-bold text-gray-900">Plot Details</h2>
          </div>
        </div>
        <div className="space-y-4">
          <input
            type="number"
            value={size}
            onChange={(e) => setSize(e.target.value)}
            placeholder="Plot Size (sq ft)"
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 outline-none"
          />
          <div className="grid grid-cols-2 gap-3">
            {['north', 'south', 'east', 'west'].map((dir) => (
              <button
                key={dir}
                onClick={() => setRoadFacing(dir)}
                className={`px-4 py-3 rounded-xl font-medium capitalize ${
                  roadFacing === dir ? 'bg-amber-600 text-white' : 'bg-gray-100 text-gray-700'
                }`}
              >
                {dir}
              </button>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">
            Back
          </button>
          <button
            onClick={() => onNext({ plot: { size: parseInt(size), roadFacing, isCorner: false } })}
            disabled={!size || !roadFacing}
            className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

// Remaining simplified steps (3-12) following similar pattern
function Step3Purpose({ onNext, onBack }: any) {
  const [purpose, setPurpose] = useState('');
  const purposes = ['Primary Residence', 'Weekend Home', 'Farm House', 'Retirement Home', 'Heritage Villa'];
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center">
            <Home className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 3</p>
            <h2 className="text-3xl font-bold text-gray-900">House Purpose</h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {purposes.map((p) => (
            <button
              key={p}
              onClick={() => setPurpose(p)}
              className={`p-6 rounded-xl font-medium text-left ${
                purpose === p ? 'bg-gradient-to-br from-amber-600 to-orange-600 text-white' : 'bg-gray-50 text-gray-700'
              }`}
            >
              {p}
            </button>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ housePurpose: purpose })} disabled={!purpose} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50">Continue</button>
        </div>
      </div>
    </div>
  );
}

// Steps 4-12 simplified inline
function Step4Styles({ onNext, onBack }: any) {
  const [styles, setStyles] = useState<string[]>([]);
  const styleList = ['Chettinad', 'Kerala', 'Haveli', 'Colonial', 'Rajput', 'Modern Heritage'];
  
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-pink-600 flex items-center justify-center">
            <Palette className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 4</p>
            <h2 className="text-3xl font-bold text-gray-900">Architectural Styles</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {styleList.map((s) => (
            <button
              key={s}
              onClick={() => setStyles(prev => prev.includes(s) ? prev.filter(x => x !== s) : [...prev, s])}
              className={`p-4 rounded-xl font-medium ${
                styles.includes(s) ? 'bg-amber-600 text-white' : 'bg-gray-50 text-gray-700'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ architecturalStyles: styles })} disabled={styles.length === 0} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step5Floors({ onNext, onBack }: any) {
  const [floors, setFloors] = useState('');
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-indigo-600 flex items-center justify-center">
            <Building2 className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 5</p>
            <h2 className="text-3xl font-bold text-gray-900">Number of Floors</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {['Ground', 'G+1', 'G+2', 'Custom'].map((f) => (
            <button key={f} onClick={() => setFloors(f)} className={`p-6 rounded-xl font-medium ${floors === f ? 'bg-amber-600 text-white' : 'bg-gray-50 text-gray-700'}`}>{f}</button>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ floors })} disabled={!floors} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step6Budget({ onNext, onBack }: any) {
  const [budget, setBudget] = useState(5000000);
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 flex items-center justify-center">
            <IndianRupee className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 6</p>
            <h2 className="text-3xl font-bold text-gray-900">Budget</h2>
          </div>
        </div>
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-amber-700 mb-2">₹{(budget/10000000).toFixed(2)} Cr</div>
        </div>
        <input type="range" min="2500000" max="200000000" step="500000" value={budget} onChange={(e) => setBudget(parseInt(e.target.value))} className="w-full" />
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ budget })} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step7Timeline({ onNext, onBack }: any) {
  const [timeline, setTimeline] = useState('');
  const timelines = ['Immediately', '3 Months', '6 Months', '1 Year', 'Flexible'];
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-500 to-teal-600 flex items-center justify-center">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 7</p>
            <h2 className="text-3xl font-bold text-gray-900">Timeline</h2>
          </div>
        </div>
        <div className="space-y-3">
          {timelines.map((t) => (
            <button key={t} onClick={() => setTimeline(t)} className={`w-full p-6 rounded-xl font-medium text-left ${timeline === t ? 'bg-amber-600 text-white' : 'bg-gray-50 text-gray-700'}`}>{t}</button>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ timeline })} disabled={!timeline} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step8Family({ onNext, onBack }: any) {
  const [adults, setAdults] = useState(2);
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-500 to-rose-600 flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 8</p>
            <h2 className="text-3xl font-bold text-gray-900">Family Size</h2>
          </div>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
          <span>Adults</span>
          <div className="flex gap-3">
            <button onClick={() => setAdults(Math.max(0, adults - 1))} className="w-10 h-10 rounded-full bg-white border-2">−</button>
            <span className="w-8 text-center font-bold">{adults}</span>
            <button onClick={() => setAdults(adults + 1)} className="w-10 h-10 rounded-full bg-white border-2">+</button>
          </div>
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ familySize: { adults, children: 0, parents: 0, guests: 0, pets: 0 } })} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step9Lifestyle({ onNext, onBack }: any) {
  const [selected, setSelected] = useState<string[]>([]);
  const features = ['Home Office', 'Library', 'Prayer Room', 'Swimming Pool', 'Gym', 'Solar'];
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-cyan-600 flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 9</p>
            <h2 className="text-3xl font-bold text-gray-900">Lifestyle Features</h2>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {features.map((f) => (
            <button key={f} onClick={() => setSelected(prev => prev.includes(f) ? prev.filter(x => x !== f) : [...prev, f])} className={`p-4 rounded-xl font-medium ${selected.includes(f) ? 'bg-amber-600 text-white' : 'bg-gray-50 text-gray-700'}`}>{f}</button>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ lifestyle: selected.reduce((acc, f) => ({ ...acc, [f.toLowerCase().replace(/\s+/g, '')]: true }), {}) })} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step10Interior({ onNext, onBack }: any) {
  const [pref, setPref] = useState('');
  const prefs = ['Traditional', 'Modern', 'Luxury', 'Minimal'];
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
            <Sofa className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 10</p>
            <h2 className="text-3xl font-bold text-gray-900">Interior Preference</h2>
          </div>
        </div>
        <div className="space-y-3">
          {prefs.map((p) => (
            <button key={p} onClick={() => setPref(p)} className={`w-full p-6 rounded-xl font-medium text-left ${pref === p ? 'bg-amber-600 text-white' : 'bg-gray-50 text-gray-700'}`}>{p}</button>
          ))}
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ interiorPreference: pref })} disabled={!pref} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold disabled:opacity-50">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step11Special({ onNext, onBack }: any) {
  const [req, setReq] = useState('');
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center">
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 11</p>
            <h2 className="text-3xl font-bold text-gray-900">Special Requirements</h2>
          </div>
        </div>
        <textarea value={req} onChange={(e) => setReq(e.target.value)} placeholder="Tell us about your special requirements..." rows={8} className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 outline-none" />
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ specialRequirements: req })} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold">Continue</button>
        </div>
      </div>
    </div>
  );
}

function Step12Upload({ onNext, onBack }: any) {
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-fuchsia-500 to-fuchsia-600 flex items-center justify-center">
            <Upload className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">STEP 12</p>
            <h2 className="text-3xl font-bold text-gray-900">Upload Inspirations</h2>
          </div>
        </div>
        <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
          <Upload className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <p className="text-lg font-semibold text-gray-700 mb-2">Drop files here or click to browse</p>
          <p className="text-sm text-gray-500">Maximum 20 files</p>
        </div>
        <div className="flex gap-4 mt-8">
          <button onClick={onBack} className="flex-1 px-8 py-4 bg-gray-100 text-gray-700 rounded-xl font-semibold">Back</button>
          <button onClick={() => onNext({ inspirationFiles: [] })} className="flex-1 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold">Complete Requirements</button>
        </div>
      </div>
    </div>
  );
}
