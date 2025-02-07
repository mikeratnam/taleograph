/*
  # Create user profiles and preferences

  1. New Tables
    - `profiles`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `full_name` (text)
      - `travel_style` (text)
      - `created_at` (timestamp)
    - `user_interests`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `interest` (text)
    - `dream_destinations`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `destination_name` (text)
    - `subscriptions`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references profiles)
      - `plan_type` (text)
      - `active` (boolean)
      - `created_at` (timestamp)
      - `expires_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for user access
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users NOT NULL,
  full_name text,
  travel_style text,
  created_at timestamptz DEFAULT now(),
  UNIQUE(user_id)
);

-- Create user interests table
CREATE TABLE IF NOT EXISTS user_interests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles NOT NULL,
  interest text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create dream destinations table
CREATE TABLE IF NOT EXISTS dream_destinations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles NOT NULL,
  destination_name text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Create subscriptions table
CREATE TABLE IF NOT EXISTS subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES profiles NOT NULL,
  plan_type text NOT NULL,
  active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  expires_at timestamptz NOT NULL
);

-- Enable Row Level Security
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE user_interests ENABLE ROW LEVEL SECURITY;
ALTER TABLE dream_destinations ENABLE ROW LEVEL SECURITY;
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Users can read own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can read own interests"
  ON user_interests FOR SELECT
  TO authenticated
  USING (user_id IN (
    SELECT id FROM profiles WHERE auth.uid() = profiles.user_id
  ));

CREATE POLICY "Users can manage own interests"
  ON user_interests FOR ALL
  TO authenticated
  USING (user_id IN (
    SELECT id FROM profiles WHERE auth.uid() = profiles.user_id
  ));

CREATE POLICY "Users can read own destinations"
  ON dream_destinations FOR SELECT
  TO authenticated
  USING (user_id IN (
    SELECT id FROM profiles WHERE auth.uid() = profiles.user_id
  ));

CREATE POLICY "Users can manage own destinations"
  ON dream_destinations FOR ALL
  TO authenticated
  USING (user_id IN (
    SELECT id FROM profiles WHERE auth.uid() = profiles.user_id
  ));

CREATE POLICY "Users can read own subscription"
  ON subscriptions FOR SELECT
  TO authenticated
  USING (user_id IN (
    SELECT id FROM profiles WHERE auth.uid() = profiles.user_id
  ));