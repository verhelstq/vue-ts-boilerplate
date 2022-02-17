import { createClient } from '@supabase/supabase-js'
const supabase = createClient('https://jytgssaatmdhbkntctdy.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp5dGdzc2FhdG1kaGJrbnRjdGR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDQ0ODgwMTIsImV4cCI6MTk2MDA2NDAxMn0.HKVUtKwjnwjWO-dXvx0PcxwPts5pnjm_X6ayBnNbKzg')

export default supabase;