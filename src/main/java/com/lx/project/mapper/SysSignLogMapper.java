package com.lx.project.mapper;

import com.lx.project.entity.SysSignLog;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

/**
 * <p>
 * 系统登录日志 Mapper 接口
 * </p>
 *
 * @author LX
 * @since 2018-12-23
 */
@Mapper
@Repository
public interface SysSignLogMapper extends BaseMapper<SysSignLog> {

}
