'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  addDays,
  addMonths,
  format,
  isBefore,
  isSameDay,
  isSameMonth,
  isSunday,
  startOfDay,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import {
  ArrowLeft,
  Building2,
  CalendarDays,
  Check,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Phone,
  Video,
} from 'lucide-react';

type MeetingType = 'video' | 'phone' | 'site-visit' | 'office-visit';

const MEETING_TYPES: {
  id: MeetingType;
  label: string;
  description: string;
  icon: typeof Video;
}[] = [
  {
    id: 'video',
    label: 'Video Call',
    description: 'Google Meet / Zoom with an architect',
    icon: Video,
  },
  {
    id: 'phone',
    label: 'Phone Call',
    description: 'Direct call on your registered number',
    icon: Phone,
  },
  {
    id: 'site-visit',
    label: 'Site Visit',
    description: 'Architect visits your plot',
    icon: MapPin,
  },
  {
    id: 'office-visit',
    label: 'Office Visit',
    description: 'Meet us at the studio',
    icon: Building2,
  },
];

const TIME_SLOTS = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '12:00 PM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
  '06:00 PM',
];

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

function typeLabel(id: MeetingType) {
  return MEETING_TYPES.find((item) => item.id === id)?.label ?? id;
}

export default function BookingPage() {
  const today = startOfDay(new Date());
  const [month, setMonth] = useState(startOfMonth(today));
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [meetingType, setMeetingType] = useState<MeetingType | ''>('');
  const [notes, setNotes] = useState('');
  const [booked, setBooked] = useState(false);

  const calendarDays = useMemo(() => {
    const gridStart = startOfWeek(startOfMonth(month), { weekStartsOn: 0 });
    return Array.from({ length: 42 }, (_, index) => addDays(gridStart, index));
  }, [month]);

  const canConfirm = Boolean(meetingType && selectedDate && selectedTime);

  const handleSelectDate = (day: Date) => {
    const disabled = isBefore(day, today) || isSunday(day);
    if (disabled) return;
    setSelectedDate(day);
    setSelectedTime('');
  };

  if (booked && selectedDate && meetingType) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-white flex items-center justify-center px-4">
        <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" aria-hidden />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">Meeting booked</h1>
          <p className="text-gray-600 mb-6">
            We will send a confirmation on email, SMS, and WhatsApp.
          </p>
          <div className="bg-amber-50 rounded-2xl p-5 text-left mb-8 space-y-2">
            <p className="font-semibold text-gray-900">
              {format(selectedDate, 'EEEE, d MMMM yyyy')}
            </p>
            <p className="text-amber-800 font-medium">{selectedTime} · 45 minutes</p>
            <p className="text-sm text-gray-600">{typeLabel(meetingType)}</p>
            {notes ? <p className="text-sm text-gray-500 pt-2">{notes}</p> : null}
          </div>
          <Link
            href="/"
            className="inline-flex w-full justify-center px-6 py-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-white py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-amber-700 mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to home
        </Link>

        <div className="text-center mb-10">
          <p className="text-sm font-semibold tracking-wide text-amber-700 uppercase mb-2">
            Consultation
          </p>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Book a meeting</h1>
          <p className="text-lg text-gray-600">
            Choose how you want to meet, then pick a date and time on the calendar.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          <section className="lg:col-span-3 bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <CalendarDays className="w-5 h-5 text-amber-600" />
                {format(month, 'MMMM yyyy')}
              </h2>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => setMonth((value) => addMonths(value, -1))}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:bg-amber-50"
                  aria-label="Previous month"
                >
                  <ChevronLeft className="w-5 h-5 mx-auto" />
                </button>
                <button
                  type="button"
                  onClick={() => setMonth((value) => addMonths(value, 1))}
                  className="w-10 h-10 rounded-full border border-gray-200 hover:bg-amber-50"
                  aria-label="Next month"
                >
                  <ChevronRight className="w-5 h-5 mx-auto" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-7 gap-2 mb-2">
              {WEEKDAYS.map((day) => (
                <div
                  key={day}
                  className="text-center text-xs font-semibold text-gray-500 py-2"
                >
                  {day}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-7 gap-2">
              {calendarDays.map((day) => {
                const outside = !isSameMonth(day, month);
                const disabled = isBefore(day, today) || isSunday(day);
                const selected = selectedDate ? isSameDay(day, selectedDate) : false;
                const isToday = isSameDay(day, today);

                return (
                  <button
                    key={format(day, 'yyyy-MM-dd')}
                    type="button"
                    disabled={disabled || outside}
                    onClick={() => handleSelectDate(day)}
                    className={`aspect-square rounded-xl text-sm font-medium transition-all ${
                      selected
                        ? 'bg-amber-600 text-white shadow-lg scale-105'
                        : disabled || outside
                          ? 'text-gray-300 cursor-not-allowed'
                          : isToday
                            ? 'bg-amber-50 text-amber-800 ring-1 ring-amber-300'
                            : 'bg-gray-50 text-gray-800 hover:bg-amber-100'
                    }`}
                  >
                    {format(day, 'd')}
                  </button>
                );
              })}
            </div>

            <p className="text-xs text-gray-500 mt-4">
              Sundays are closed. Times are shown in India Standard Time (IST).
            </p>
          </section>

          <section className="lg:col-span-2 space-y-6">
            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Meeting type</h2>
              <div className="space-y-3">
                {MEETING_TYPES.map((item) => {
                  const Icon = item.icon;
                  const active = meetingType === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setMeetingType(item.id)}
                      className={`w-full text-left p-4 rounded-2xl border-2 transition-all ${
                        active
                          ? 'border-amber-500 bg-amber-50'
                          : 'border-gray-100 hover:border-amber-200'
                      }`}
                    >
                      <div className="flex gap-3">
                        <Icon className={`w-5 h-5 mt-0.5 ${active ? 'text-amber-700' : 'text-gray-500'}`} />
                        <div>
                          <div className="font-semibold text-gray-900">{item.label}</div>
                          <div className="text-sm text-gray-500">{item.description}</div>
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-xl p-6">
              <h2 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-amber-600" />
                Time slot
              </h2>
              {!selectedDate ? (
                <p className="text-sm text-gray-500">Select a date on the calendar first.</p>
              ) : (
                <>
                  <p className="text-sm text-amber-800 font-medium mb-3">
                    {format(selectedDate, 'EEEE, d MMM')}
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {TIME_SLOTS.map((slot) => (
                      <button
                        key={slot}
                        type="button"
                        onClick={() => setSelectedTime(slot)}
                        className={`py-2.5 px-3 rounded-xl text-sm font-medium ${
                          selectedTime === slot
                            ? 'bg-amber-600 text-white'
                            : 'bg-gray-50 text-gray-700 hover:bg-amber-100'
                        }`}
                      >
                        {slot}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </section>
        </div>

        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8 mt-6">
          <label htmlFor="booking-notes" className="block text-sm font-semibold text-gray-700 mb-2">
            Notes for the architect (optional)
          </label>
          <textarea
            id="booking-notes"
            value={notes}
            onChange={(event) => setNotes(event.target.value)}
            rows={3}
            placeholder="Plot location, preferred language, or anything we should prepare."
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-amber-500 outline-none resize-none"
          />

          <button
            type="button"
            disabled={!canConfirm}
            onClick={() => setBooked(true)}
            className="w-full mt-6 px-8 py-4 bg-gradient-to-r from-amber-600 to-orange-600 text-white rounded-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Confirm meeting
          </button>
        </div>
      </div>
    </div>
  );
}
