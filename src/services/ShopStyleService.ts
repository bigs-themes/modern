// ShopStyleService for Modern Theme
// This service handles shop style configuration

export interface ShopStyleConfig {
  shopId: string;
  templateId: string;
  domain: string;
  isPreview: boolean;
  settings: {
    colors: {
      primary: string;
      secondary: string;
      neutral: string;
      semantic: string;
      background: string;
      surface: string;
      text: string;
      textSecondary: string;
    };
    fonts: {
      heading: string;
      body: string;
    };
    styles: {
      button: {
        config: {
          primary: any;
          secondary: any;
        };
      };
      card: {
        config: any;
      };
    };
  };
  pageInterface: {
    announcementBarSettings: {
      visible: boolean;
      content: string;
      textColor: string;
      backgroundColor: string;
      showOnHomepageOnly: boolean;
    };
  };
}

// Default configuration for Modern Theme
const getDefaultConfig = (shopId: string): ShopStyleConfig => ({
  shopId,
  templateId: 'modern',
  domain: `${shopId}.bigs.vn`,
  isPreview: true,
  settings: {
    colors: {
      primary: '#667eea',
      secondary: '#764ba2',
      neutral: '#6B7280',
      semantic: '#F59E0B',
      background: '#FFFFFF',
      surface: '#F8FAFC',
      text: '#1A202C',
      textSecondary: '#4A5568'
    },
    fonts: {
      heading: 'Inter',
      body: 'Inter'
    },
    styles: {
      button: {
        config: {
          primary: {
            bg: '#667eea',
            text: '#ffffff',
            border: '#667eea',
            radius: '8px',
            shadow: '0 2px 4px rgba(102, 126, 234, 0.2)',
            padding: '12px 24px',
            fontSize: '16px',
            hoverBg: '#5a67d8',
            hoverText: '#ffffff',
            hoverEffect: 'scale'
          },
          secondary: {
            bg: '#ffffff',
            text: '#667eea',
            border: '#667eea',
            radius: '8px',
            shadow: 'none',
            padding: '10px 22px',
            fontSize: '14px',
            hoverBg: '#f7fafc',
            hoverText: '#5a67d8',
            hoverEffect: 'darken'
          }
        }
      },
      card: {
        config: {
          bg: '#ffffff',
          border: '1px solid #e2e8f0',
          radius: '12px',
          shadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
          padding: '20px',
          hoverEffect: 'lift'
        }
      }
    }
  },
  pageInterface: {
    announcementBarSettings: {
      visible: true,
      content: '🎉 Modern Theme v2.0 - Sidebar Navigation Layout!',
      textColor: '#ffffff',
      backgroundColor: '#667eea',
      showOnHomepageOnly: false
    }
  }
});

export const shopStyleService = {
  async getShopStyleConfig(shopId: string): Promise<ShopStyleConfig> {
    try {
      // In a real implementation, this would fetch from database
      // For now, return default config
      return getDefaultConfig(shopId);
    } catch (error) {
      console.warn('Failed to load shop style config, using default:', error);
      return getDefaultConfig(shopId);
    }
  },

  async updateShopStyleConfig(shopId: string, config: Partial<ShopStyleConfig>): Promise<void> {
    try {
      // In a real implementation, this would save to database
      console.log('Updating shop style config for:', shopId, config);
    } catch (error) {
      console.error('Failed to update shop style config:', error);
      throw error;
    }
  },

  async publishShopStyleConfig(shopId: string): Promise<void> {
    try {
      // In a real implementation, this would publish the config
      console.log('Publishing shop style config for:', shopId);
    } catch (error) {
      console.error('Failed to publish shop style config:', error);
      throw error;
    }
  }
}; 