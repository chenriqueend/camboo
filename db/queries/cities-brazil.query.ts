import { SupabaseClientType } from "@/types/SupabaseClientType";

// export const getCitiesBrazil = async (supabaseClient: SupabaseClientType) => {
//     const limit = 1000;
//     return await supabaseClient.from("cities_brazil").select("*").order("state_short").limit(limit);
// }

// export const getCitiesBrazilByState = async (supabaseClient: SupabaseClientType, state_short: string) => {
//     const limit = 1000;
//     return await supabaseClient.from("cities_brazil").select("*").eq('state_short', state_short).order("state_short").limit(limit);
// }

export const getCitiesBrazilByStateFactory = (supabaseClient: SupabaseClientType) => {

    return {
        getCitiesBrazil: async () => {
            const limit = 1000;
            return await supabaseClient.from("cities_brazil").select("*").order("state_short").limit(limit);
        },
        getCitiesBrazilByState: async (state_short: string) => {
            const limit = 1000;
            return await supabaseClient.from("cities_brazil").select("*").eq('state_short', state_short).order("state_short").limit(limit);
        }
    }
}