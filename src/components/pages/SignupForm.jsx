import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory} from 'react-router-dom';
import api from '../axios';
import { Loader2 } from 'lucide-react';
import Layout from '../layout/Layout';




const SignupForm = () => {
  const [roles, setRoles] = useState([]);
  const [isStoreSelected, setIsStoreSelected] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm({
    defaultValues: {
      role_id: '2' // Default to Customer role
    }
  });

  // Watch role_id to show/hide store fields
  const selectedRole = watch('role_id');

  useEffect(() => {
    // Fetch roles on component mount
    const fetchRoles = async () => {
      try {
        const response = await api.get('/roles');
        setRoles(response.data);
      } catch (err) {
        setError('Failed to fetch roles');
      }
    };
    fetchRoles();
  }, []);

  useEffect(() => {
    setIsStoreSelected(selectedRole === '3'); // Assuming '3' is the store role ID
  }, [selectedRole]);


  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    try {
      // Format data based on role
      const formData = {
        name: data.name,
        email: data.email,
        password: data.password,
        role_id: data.role_id
      };

      if (isStoreSelected) {
        formData.store = {
          name: data.store_name,
          phone: data.store_phone,
          tax_no: data.store_tax_no,
          bank_account: data.store_bank_account
        };
      }

      const response = await api.post('/signup', formData);
      
      if (response.data.message.includes("User created")) {
        setSuccessMessage("Account created successfully! Due to technical issues, you may not receive a verification email immediately. Please contact support if needed.");
        // Optional: Add a delay before navigation
        setTimeout(() => {
          history.oush("/");
        }, 5000); // 5 seconds delay to show the message
      }
    } catch (err) {
      if (err.response?.status === 500) {
        setError("Account created, but there was an issue with the email service. Please contact support.");
      } else {
        setError(err.response?.data?.message || 'Signup failed. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };



  return (
    <Layout>
    <div className="min-h-screen bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              {...register('name', {
                required: 'Name is required',
                minLength: {
                  value: 3,
                  message: 'Name must be at least 3 characters'
                }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address'
                }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              {...register('password', {
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password must be at least 8 characters'
                },
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                  message: 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
                }
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                validate: value => value === watch('password') || 'Passwords do not match'
              })}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            />
            {errors.confirmPassword && (
              <p className="mt-1 text-sm text-red-600">{errors.confirmPassword.message}</p>
            )}
          </div>

          {/* Role Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Role</label>
            <select
              {...register('role_id')}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
            >
              {roles.map(role => (
                <option key={role.id} value={role.id}>
                  {role.name}
                </option>
              ))}
            </select>
          </div>

          {/* Store Fields */}
          {isStoreSelected && (
            <div className="space-y-4">
              {/* Store Name */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Name</label>
                <input
                  {...register('store_name', {
                    required: 'Store name is required',
                    minLength: {
                      value: 3,
                      message: 'Store name must be at least 3 characters'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.store_name && (
                  <p className="mt-1 text-sm text-red-600">{errors.store_name.message}</p>
                )}
              </div>

              {/* Store Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Phone</label>
                <input
                  {...register('store_phone', {
                    required: 'Store phone is required',
                    pattern: {
                      value: /^(\+90|0)?[0-9]{10}$/,
                      message: 'Invalid Turkish phone number'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.store_phone && (
                  <p className="mt-1 text-sm text-red-600">{errors.store_phone.message}</p>
                )}
              </div>

              {/* Store Tax ID */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Tax ID</label>
                <input
                  {...register('store_tax_no', {
                    required: 'Tax ID is required',
                    pattern: {
                      value: /^T\d{4}V\d{6}$/,
                      message: 'Invalid Tax ID format (TXXXXVXXXXXX)'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.store_tax_no && (
                  <p className="mt-1 text-sm text-red-600">{errors.store_tax_no.message}</p>
                )}
              </div>

              {/* Store Bank Account */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Store Bank Account (IBAN)</label>
                <input
                  {...register('store_bank_account', {
                    required: 'IBAN is required',
                    pattern: {
                      value: /^TR\d{2}\d{5}[A-Z0-9]{17}$/,
                      message: 'Invalid IBAN format'
                    }
                  })}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
                />
                {errors.store_bank_account && (
                  <p className="mt-1 text-sm text-red-600">{errors.store_bank_account.message}</p>
                )}
              </div>
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" />
                Signing up...
              </>
            ) : (
              'Sign Up'
            )}
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
};

export default SignupForm;