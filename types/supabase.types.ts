export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      addresses: {
        Row: {
          address_1: string | null
          address_2: string | null
          created_at: string
          id: string
          profile_id: string
        }
        Insert: {
          address_1?: string | null
          address_2?: string | null
          created_at?: string
          id?: string
          profile_id: string
        }
        Update: {
          address_1?: string | null
          address_2?: string | null
          created_at?: string
          id?: string
          profile_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "addresses_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      chatMessages: {
        Row: {
          created_at: string
          from_user_id: string | null
          id: number
          message: string
          to_user_id: string | null
        }
        Insert: {
          created_at?: string
          from_user_id?: string | null
          id?: number
          message: string
          to_user_id?: string | null
        }
        Update: {
          created_at?: string
          from_user_id?: string | null
          id?: number
          message?: string
          to_user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "chatMessages_from_user_id_fkey"
            columns: ["from_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "chatMessages_to_user_id_fkey"
            columns: ["to_user_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      cities_brazil: {
        Row: {
          active: boolean | null
          city_name: string
          created_at: string
          id: number
          state_name: string | null
          state_short: string | null
        }
        Insert: {
          active?: boolean | null
          city_name: string
          created_at?: string
          id?: number
          state_name?: string | null
          state_short?: string | null
        }
        Update: {
          active?: boolean | null
          city_name?: string
          created_at?: string
          id?: number
          state_name?: string | null
          state_short?: string | null
        }
        Relationships: []
      }
      communityGroups: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      communityGroupsParticipants: {
        Row: {
          created_at: string
          group_id: string | null
          id: string
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          group_id?: string | null
          id?: string
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          group_id?: string | null
          id?: string
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "communityGroupsParticipants_group_id_fkey"
            columns: ["group_id"]
            isOneToOne: false
            referencedRelation: "communityGroups"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "communityGroupsParticipants_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      interests: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      profile_details: {
        Row: {
          created_at: string
          id: string
          localizacao: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          created_at?: string
          id: string
          localizacao?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          localizacao?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profile_details_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      profiles: {
        Row: {
          auth_provider: string | null
          avatar_url: string | null
          created_at: string | null
          full_name: string | null
          id: string
          is_active: boolean
          updated_at: string | null
          username: string | null
        }
        Insert: {
          auth_provider?: string | null
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id: string
          is_active?: boolean
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          auth_provider?: string | null
          avatar_url?: string | null
          created_at?: string | null
          full_name?: string | null
          id?: string
          is_active?: boolean
          updated_at?: string | null
          username?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      savedForLater: {
        Row: {
          created_at: string
          id: string
          profile_id: string | null
          tradeItem_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          profile_id?: string | null
          tradeItem_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          profile_id?: string | null
          tradeItem_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "savedForLater_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "savedForLater_tradeItem_id_fkey"
            columns: ["tradeItem_id"]
            isOneToOne: false
            referencedRelation: "tradeItems"
            referencedColumns: ["id"]
          }
        ]
      }
      tradeItems: {
        Row: {
          categories: Json | null
          created_at: string
          description: string | null
          id: string
          imagesURLS: Json[] | null
          metadata: Json | null
          name: string | null
          profile_id: string | null
          updated_at: string | null
        }
        Insert: {
          categories?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          imagesURLS?: Json[] | null
          metadata?: Json | null
          name?: string | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Update: {
          categories?: Json | null
          created_at?: string
          description?: string | null
          id?: string
          imagesURLS?: Json[] | null
          metadata?: Json | null
          name?: string | null
          profile_id?: string | null
          updated_at?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tradeItems_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      tradeItemsCategories: {
        Row: {
          created_at: string
          description: string | null
          id: string
          name: string | null
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          name?: string | null
        }
        Relationships: []
      }
      tradeTransactions: {
        Row: {
          created_at: string
          done_at: string | null
          givenItem: string | null
          id: number
          metadata: Json | null
          takerItem: string | null
        }
        Insert: {
          created_at?: string
          done_at?: string | null
          givenItem?: string | null
          id?: number
          metadata?: Json | null
          takerItem?: string | null
        }
        Update: {
          created_at?: string
          done_at?: string | null
          givenItem?: string | null
          id?: number
          metadata?: Json | null
          takerItem?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "tradeTransactions_givenItem_fkey"
            columns: ["givenItem"]
            isOneToOne: false
            referencedRelation: "tradeItems"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "tradeTransactions_takerItem_fkey"
            columns: ["takerItem"]
            isOneToOne: false
            referencedRelation: "tradeItems"
            referencedColumns: ["id"]
          }
        ]
      }
      userRegistrationControl: {
        Row: {
          created_at: string
          email_verified: boolean | null
          email_verified_at: string | null
          id: string
          phone_verified: boolean | null
          phone_verified_at: string | null
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          email_verified?: boolean | null
          email_verified_at?: string | null
          id?: string
          phone_verified?: boolean | null
          phone_verified_at?: string | null
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          email_verified?: boolean | null
          email_verified_at?: string | null
          id?: string
          phone_verified?: boolean | null
          phone_verified_at?: string | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "userRegistrationControl_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
      usersInterests: {
        Row: {
          created_at: string
          id: string
          interest_id: string | null
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          id?: string
          interest_id?: string | null
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          id?: string
          interest_id?: string | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "usersInterests_interest_id_fkey"
            columns: ["interest_id"]
            isOneToOne: false
            referencedRelation: "interests"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "usersInterests_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
