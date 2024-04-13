import { createClient } from '@supabase/supabase-js'

const URL = 'https://uhczzltylqyfvalzbvqj.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVoY3p6bHR5bHF5ZnZhbHpidnFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTI5NDIzOTUsImV4cCI6MjAyODUxODM5NX0.E03PcCQN3Wak1fEF-RUzbxAyMTNLBHJ_jKtvWDH_Lqw';

export const supabase = createClient(URL, API_KEY);