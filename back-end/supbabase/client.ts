
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://mkstojmzizzjookcopir.supabase.co'
const supabaseKey = process.env.SUPABASE_KEY

const supabase = createClient(supabaseUrl, supabaseKey)