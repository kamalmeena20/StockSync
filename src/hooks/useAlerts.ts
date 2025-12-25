import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from './useAuth';
import { toast } from 'sonner';

export interface Alert {
  id: string;
  user_id: string;
  inventory_item_id: string | null;
  type: 'dead_stock' | 'low_stock' | 'damaged' | 'expiring' | 'slow_moving';
  severity: 'critical' | 'warning' | 'info';
  title: string;
  description: string | null;
  is_resolved: boolean;
  created_at: string;
  resolved_at: string | null;
  inventory_item?: { name: string; sku: string } | null;
}

export function useAlerts() {
  const { user } = useAuth();
  
  return useQuery({
    queryKey: ['alerts', user?.id],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('alerts')
        .select(`
          *,
          inventory_item:inventory_items(name, sku)
        `)
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Alert[];
    },
    enabled: !!user
  });
}

export function useCreateAlert() {
  const queryClient = useQueryClient();
  const { user } = useAuth();

  return useMutation({
    mutationFn: async (alert: Omit<Alert, 'id' | 'user_id' | 'created_at' | 'resolved_at' | 'inventory_item'>) => {
      if (!user) throw new Error('Not authenticated');
      
      const { data, error } = await supabase
        .from('alerts')
        .insert({ ...alert, user_id: user.id })
        .select()
        .single();
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['alerts'] });
    },
    onError: (error) => {
      toast.error('Failed to create alert: ' + error.message);
    }
  });
}

export function useResolveAlert() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('alerts')
        .update({ is_resolved: true, resolved_at: new Date().toISOString() })
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['alerts'] });
      toast.success('Alert resolved');
    },
    onError: (error) => {
      toast.error('Failed to resolve alert: ' + error.message);
    }
  });
}

export function useDeleteAlert() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('alerts')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['alerts'] });
      toast.success('Alert deleted');
    },
    onError: (error) => {
      toast.error('Failed to delete alert: ' + error.message);
    }
  });
}
