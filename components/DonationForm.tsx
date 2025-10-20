import React, { useState } from 'react';

const DonationForm: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [amount, setAmount] = useState<string | number>(25);
  const [customAmount, setCustomAmount] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleAmountClick = (value: number) => {
    setAmount(value);
    setCustomAmount('');
  };
  
  const handleCustomAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCustomAmount(value);
    setAmount(value);
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !amount || Number(amount) <= 0) {
      setError('Please fill in all fields and enter a valid amount.');
      return;
    }
    setError('');

    const newDonation = {
      name,
      email,
      amount: Number(amount),
      date: new Date().toISOString(),
    };

    try {
      const existingDonations = JSON.parse(localStorage.getItem('campaign_donations') || '[]');
      const updatedDonations = [...existingDonations, newDonation];
      localStorage.setItem('campaign_donations', JSON.stringify(updatedDonations));
      
      setSubmitted(true);
      setName('');
      setEmail('');
      setAmount(25);
      setCustomAmount('');

      setTimeout(() => setSubmitted(false), 5000);

    } catch (storageError) {
      setError('Could not save donation. Please try again.');
      console.error('Error saving to localStorage:', storageError);
    }
  };

  if (submitted) {
    return (
      <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-lg text-center max-w-2xl mx-auto" role="alert">
        <p className="font-bold">Thank you for your generous contribution!</p>
        <p>Your support is vital to our campaign's success.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 max-w-2xl mx-auto bg-gray-50 border border-gray-200 p-8 rounded-lg">
      <div>
        <h3 className="text-xl font-bold text-campaign-blue mb-4 font-serif">Choose an Amount</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[10, 25, 50, 100].map((val) => (
            <button
              key={val}
              type="button"
              onClick={() => handleAmountClick(val)}
              className={`p-4 rounded-md text-lg font-bold border-2 transition-colors ${amount === val ? 'bg-campaign-blue text-white border-campaign-blue' : 'bg-white text-campaign-dark border-gray-300 hover:border-campaign-blue hover:text-campaign-blue'}`}
            >
              ${val}
            </button>
          ))}
        </div>
        <div className="mt-4">
          <label htmlFor="custom-amount" className="sr-only">Custom Amount</label>
          <div className="relative">
             <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-500">$</span>
            <input
              type="number"
              id="custom-amount"
              name="custom-amount"
              value={customAmount}
              onChange={handleCustomAmountChange}
              placeholder="Other Amount"
              className="w-full bg-white pl-7 pr-4 py-3 border border-gray-300 rounded-md focus:ring-campaign-light-blue focus:border-campaign-light-blue"
            />
          </div>
        </div>
      </div>
      
      <div>
        <h3 className="text-xl font-bold text-campaign-blue mb-4 font-serif">Your Information</h3>
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-campaign-light-blue focus:border-campaign-light-blue sm:text-sm"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mt-1 block w-full bg-white px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-campaign-light-blue focus:border-campaign-light-blue sm:text-sm"
            />
          </div>
        </div>
      </div>

      {error && (
        <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
          <p>{error}</p>
        </div>
      )}

      <button
        type="submit"
        className="w-full bg-campaign-blue hover:bg-blue-800 text-white font-bold py-4 px-8 rounded-lg text-xl transition-colors duration-300 unselectable"
      >
        Contribute ${Number(amount) > 0 ? Number(amount) : ''}
      </button>
    </form>
  );
};

export default DonationForm;